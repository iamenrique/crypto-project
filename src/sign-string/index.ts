import * as crypto from "crypto";
import {PathLike, readFileSync} from "fs";

const signString = (
    algorithm: "RSA-SHA256",
    input: string,
    privateKey: PathLike,
    encoding: BufferEncoding,
    passphrase: string
) => {
    const sign = crypto.createSign(algorithm);
    sign.update(input);
    sign.end();
    return sign
        .sign({
            key: readFileSync(privateKey),
            passphrase,
        })
        .toString(encoding);
};

export default signString;
