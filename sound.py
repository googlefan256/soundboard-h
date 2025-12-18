# /// script
# dependencies = [
#   "pydub",
#   "audioop-lts"
# ]
# ///
from pydub import AudioSegment

def edit_sound(f: str, reduction: int):
    sound = AudioSegment.from_mp3(f"./bk/{f}")
    quieter_sound = sound - reduction
    quieter_sound.export(f"./src/assets/{f}", format="mp3")
    print(f"完了しました: ./src/assets/{f} が作成されました")

def main():
    edit_sound("suho-medium.mp3", -3)
    edit_sound("drive-medium.mp3", -6)
    edit_sound("horse.mp3", 9)

if __name__ == "__main__":
    main()