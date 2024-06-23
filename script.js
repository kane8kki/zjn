document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path_to_your_game/PoisonPaddle.zip'; // Replace with the actual path to your game file
    link.download = 'PoisonPaddle.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
