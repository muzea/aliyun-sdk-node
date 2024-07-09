export interface RegisterDeviceResponse {
    /**
     * 授权接口调用是否成功
     * @example `success`
     */
    Message: string;
    /**
     * 授权接口调用结果
     * @example `操作成功`
     */
    ErrorMessage: string;
    /**
     * 授权请求的RequestId
     * @example `A68E0F1E-9CEE-4BB9-8880-943730FFD9A9`
     */
    RequestId: string;
    /**
     * 授权接口调用成功或失败的错误码
     * @example `0`
     */
    ErrorCode: number;
    /**
     * 端侧授权返回数据
     */
    Data: {
        /**
         * 云端下发的加密后的授权信息
         * @example `rSDUqJEawcrhaHVDXgQQ2vV3eOQDzuos5TAJgx9uolqVaAKkgcBHfWd/jYknsiVeYxsLWyscP0U6ia0XL/u6t7ira9XnI3Jv9qHzosrAW09YrT68VigxqwrutxtexXGgrXFzYmcMMe05rYhEmyyoeNu0CB40HxggXIIw10vH0pvhMLd0ssz6FbaOGhZ/7WDzFAqeXlz7+whZFNlXwaCfIwHTDIj9nBHHsBzWWocOHO==`
         */
        License: string;
        /**
         * 云端下发的授权信息加签后的结果
         * @example `VnxhWhjL2D3kkGcv8Q/wHzyD6dTEYIDfnIgzDWLS7iQRiCWLu1K+EA+Q6iiH1lpaDNGeQ65zVpbB1wtGMmJymQMJeJ5RHzEo74wwXP48Yfn6tdAoZwtLkxXqZo5N99W/JyEyHyeisC44ZIpLcs1YPv3Wr+uRirUgjHhZXorxJ1E=`
         */
        Signature: string;
        /**
         * 客户账户对应的公钥信息
         * @example `SSTfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwdTbYqDHxAlmdSFowPthsG3wKyXdembceyc5j31FZIYGESE4x6ND0al5ejdx26d2ZMRDzlkjnLqUN3snezRA1x0qs92taGXMrIvYDi0dEsz3X/a/VXHPxNu0+/PBT9RYzakLDV9F/6QdYn4PQUvHSTfz2ghaS5SCj++VVDe4CBBIDAAPB`
         */
        PublicKey: string;
        /**
         * 用户端侧SDK每一次授权记录标识
         * @example `1082f5e57a004a0799198d4a370c3efa`
         */
        Rid: string;
    };
}
