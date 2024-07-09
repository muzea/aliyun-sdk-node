export interface PutAccessPointPolicyRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket"?: string;
    /**
     * 接入点名称。
     * @example `ap-01`
     */
    "x-oss-access-point-name"?: string;
    /**
     * 接入点策略配置内容。
     * @example `{
       "Version":"1",
       "Statement":[
       {
         "Action":[
           "oss:PutObject",
           "oss:GetObject"
        ],
        "Effect":"Deny",
        "Principal":["27737962156157xxxx"],
        "Resource":[
           "acs:oss:ap-southeast-2:111933544165xxxx:accesspoint/$ap-01",
           "acs:oss:ap-southeast-2:111933544165xxxx:accesspoint/$ap-01/object/*"
         ]
       }
      ]
     }  `
     */
    "body"?: string;
}
