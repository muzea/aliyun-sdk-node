export interface SignResponse {
    /**
     * 签名。
     * @example `eyaC0w3ROK5b3QcHmUtAhMY/sQjKu2t3uBfnf6J/gn7JfZtyxwcCUjzXbw5jmqJQRbj1te670Bshg9kUdanKhtHFhJjU5jX+ZMMBr6pH0gqQDJxR0K0yHXRc0Q5OQoUZ6BfpbI4Wt4jJvJSdCstz1vSg12CfEHS8Kd5qfhItK7Y=`
     */
    Signature: string;
    /**
     * 请求ID。
     * @example `1ed33293-2e48-6b14-861e-538e28e408eb`
     */
    RequestId: string;
}
