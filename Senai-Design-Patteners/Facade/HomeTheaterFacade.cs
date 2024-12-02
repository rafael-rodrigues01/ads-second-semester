// Classe Facade
class HomeTheaterFacade
{
    private TV tv;
    private SoundSystem soundSystem;
    private DVDPlayer dvdPlayer;
    private Subwoofer subwoofer;

    // Construtor
    public HomeTheaterFacade(TV tv, SoundSystem soundSystem, DVDPlayer dvdPlayer)
    {
        this.tv = tv;
        this.soundSystem = soundSystem;
        this.dvdPlayer = dvdPlayer;
    }

    public HomeTheaterFacade(TV tv, SoundSystem soundSystem, DVDPlayer dvdPlayer, Subwoofer subwoofer)
    {
        this.tv = tv;
        this.soundSystem = soundSystem;
        this.dvdPlayer = dvdPlayer;
        this.subwoofer = subwoofer;
    }

    // Método simplificado para assistir a um filme
    public void WatchMovie(string movie)
    {
        Console.WriteLine("Preparando para assistir ao filme...");
        tv.On();

        if(subwoofer != null) 
        {
          subwoofer.On();
        }

        soundSystem.On();
        soundSystem.SetVolume(20);
        dvdPlayer.On();
        dvdPlayer.Play(movie);
    }

    // Método simplificado para desligar o sistema
    public void EndMovie()
    {   

        Console.WriteLine("Desligando o sistema...");
        if(subwoofer != null) 
        {
          subwoofer.Off();
        }
        dvdPlayer.Stop();
        dvdPlayer.Off();
        soundSystem.Off();
        tv.Off();
    }
}