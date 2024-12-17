using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class DataController : ControllerBase
{
    private readonly FirebaseService _firebaseService;

    public DataController(FirebaseService firebaseService)
    {
        _firebaseService = firebaseService;
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddData([FromBody] object data)
    {
        await _firebaseService.AddDataAsync("generalInfo", data);
        return Ok(new { message = "Data added successfully!" });
    }

    [HttpGet("fetch")]
    public async Task<IActionResult> FetchData()
    {
        var data = await _firebaseService.FetchDataAsync<object>("generalInfo");
        return Ok(data);
    }
}