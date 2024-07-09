export interface DescribeSmartVerifyRequest {
    /**
     * 认证场景ID。
     * 您必须先在**[增强版实人认证控制台](https://yundun.console.aliyun.com/?p=cloudauth)**创建认证场景，才能获得认证场景ID。更多信息，请参见**[添加认证场景](~~177631~~)**。
     * @example `100000xxxx`
     */
    "SceneId"?: number;
    /**
     * 认证请求ID。
     * 您必须先调用**[InitSmartVerify](~~186596~~)**提交认证请求，才能获得认证请求ID。
     * @example `91707dc296d469ad38e4c5efa6a0xxxx`
     */
    "CertifyId"?: string;
    "PictureReturnType"?: string;
}
