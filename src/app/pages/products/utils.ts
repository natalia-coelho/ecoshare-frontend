export class Utils {
    static convertImageToBase64(base64: string): Uint8Array {
        const binaryString = atob(base64);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
    }

    static getImageUrl(object) {
        const byteArray = new Uint8Array(Utils.convertImageToBase64(object.imagem));
        const binaryString = byteArray.reduce((data, byte) => data + String.fromCharCode(byte), '');
        return 'data:image/jpeg;base64,' + btoa(binaryString);
    }

    static convertFileToBase64(file: File): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = (reader.result as string).split(',')[1];
                resolve(base64String);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
}


