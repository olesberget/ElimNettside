using Google.Cloud.Firestore;
using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using Microsoft.Extensions.Logging;
using System;
using System.IO;

public class FirebaseService
{
    private readonly FirestoreDb _firestore;
    private readonly ILogger<FirebaseService> _logger;

    public FirebaseService(ILogger<FirebaseService> logger)
    {
        _logger = logger;
        try
        {
            // Initialize Firebase Admin SDK if not already initialized
            if (FirebaseApp.DefaultInstance == null)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "..", "firebase_config.json");
                _logger.LogInformation($"Loading Firebase config from: {path}");
                
                FirebaseApp.Create(new AppOptions
                {
                    Credential = GoogleCredential.FromFile(path),
                });
            }

            // Initialize Firestore properly
            _firestore = FirestoreDb.Create("elimnettside");
            _logger.LogInformation("Firebase initialization successful");
        }
        catch (Exception ex)
        {
            _logger.LogError($"Firebase initialization failed: {ex.Message}");
            throw;
        }
    }

    public async Task AddDataAsync(string collection, object data)
    {
        var collectionRef = _firestore.Collection(collection);
        DocumentReference docRef = await collectionRef.AddAsync(data);
    }

    public async Task<List<T>> FetchDataAsync<T>(string collection)
    {
        var snapshot = await _firestore.Collection(collection).GetSnapshotAsync();
        return snapshot.Documents.Select(doc => doc.ConvertTo<T>()).ToList();
    }
}
