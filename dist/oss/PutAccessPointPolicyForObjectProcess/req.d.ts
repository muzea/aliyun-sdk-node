export interface PutAccessPointPolicyForObjectProcessRequest {
    /**
     * 存储空间名称。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 填写对象FC接入点名称。
     * @example `
    fc-ap-01`
     */
    "x-oss-access-point-for-object-process-name": string;
    /**
     * 接口请求体。
     * @example `{
                    "Version": "1",
                    "Statement": [{
                        "Effect": "Allow",
                        "Action": [
                            "oss:GetObject"
                        ],
                        "Principal": [
                            "237210000000000xxxx"
                        ],
                        "Resource": [
                            "acs:oss:cn-qingdao:1030700000xxxx:accesspointforobjectprocess/fc-test/object/*"
                        ]
                    }]
                }`
     */
    "body"?: string;
}
