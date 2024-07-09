export interface RetouchBodyRequest {
    /**
     * 图像URL地址。当前仅支持上海地域的OSS链接，如何生成URL请参见[生成URL](~~155645~~)。
     * @example `https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/photo-1562956335-14faa1a9aeeb.jpeg`
     */
    "ImageURL": string;
    /**
     * 液化力度，取值范围为\[-1.0,1.0]。正数表示变瘦，负数表示变壮。
     * @example `1.0`
     */
    "SlimDegree": number;
    /**
     * 拉伸力度，取值范围为\[0,1.0]，1.0为标准值，小于0不做拉伸。
     * @example `1.0`
     */
    "LengthenDegree": number;
}
