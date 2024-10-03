import * as crypto from "crypto";
import {PathLike, readFileSync} from "fs";

const verifyString = (
    algorithm: "RSA-SHA256",
    input: string,
    publicKey: PathLike,
    signature: string, // Encoded (hex),
    signatureEncoding: crypto.BinaryToTextEncoding
) => {
    const verify = crypto.createVerify(algorithm);
    verify.update(input);
    verify.end();
    return verify.verify(readFileSync(publicKey), signature, signatureEncoding);
};

export default verifyString;
