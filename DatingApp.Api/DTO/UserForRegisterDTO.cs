using System.ComponentModel.DataAnnotations;

namespace DatingApp.Api.DTO
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 4, ErrorMessage="You must specify password bettwen 4 and 10 characters")]
        public string Password { get; set; }

    }
}