export interface DescribeComponentsJsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `58A518BC-E4A8-5BD7-AFEA-366046ED9073`
     */
    RequestId: string;
    /**
     * 组件JS文件的配置信息。
     * @example `[
        {
            "js": "https://xxxxx.oss-cn-zhangjiakou.aliyuncs.com/componentUpload/xxxxx",
            "name": "python3",
            "ownType": "sys"
        }
    ]`
     */
    ComponentsJs: string;
}
