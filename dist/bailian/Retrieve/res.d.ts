export interface RetrieveResponse {
    /**
     * Id of the request
     * @example `17204B98-7734-4F9A-8464-2446A84821CA`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 节点列表
         */
        Nodes: {
            /**
             * 检索得分,取值范围：[0-1]
             * @example `0.3`
             */
            Score: number;
            /**
             * 检索文本
             * @example `阿里云百炼是基于通义大模型、行业大模型以及三方大模型的一站式大模型开发平台。面向企业客户和个人开发者，提供完整的模型服务工具和全链路应用开发套件，预置丰富的能力插件，提供API及SDK等便捷的集成方式，高效完成大模型应用构建。`
             */
            Text: string;
            /**
             * 元数据Map。
             * @example `{
                "parent": "",
                "file_path": "https://bailian-datahub-data-pre.oss-cn-hangzhou.aliyuncs.com/multimodal/docJson/10021401/%E5%8C%97%E4%BA%AC%E5%B7%A5%E4%BD%9C%E5%B1%85%E4%BD%8F%E8%AF%81-%E5%AD%A6%E4%BD%8D%E8%AE%A4%E8%AF%81%E6%94%BB%E7%95%A54_1717583236162.json?Expires=1719482357&OSSAccessKeyId=LTAI5tKzNnKPFwCJSCpxx51h&Signature=yPgLl4gh9E0z9Ph%2F7RHSwTvsjf8%3D",
                "image_url": [
                  "http://docmind-api-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/publicDocStructure/docmind-20240605-d5d800a05442415197a929553826e3b4/0.png?Expires=1720085164&OSSAccessKeyId=LTAI5tFEK2uEApeeYzxNMEci&Signature=MvGxcxEzzD0X8CQLjmfMB8OHK40%3D"
                ],
                "nid": "075997b3a310c7d10695cbd3dfb12d2b|c8a432ba45ac993a9cb0dd3fa465302e|975065407c4510c2941725c097660d27|28b992d76381bff8c15a890f802e6fa4|0459166c84e7f2ccd1604dfca6b0f265|9b6426cafd87ff85c4019f1ac7980f1b|89662f29a7fd1af5c55e0d0f2896c38d",
                    "title": "阿里云百炼文档",
                "doc_id": "doc_062fccb18e23408a84b20ce3af1b0e8810021401",
                "content": "阿里云百炼是基于通义大模型、行业大模型以及三方大模型的一站式大模型开发平台。面向企业客户和个人开发者，提供完整的模型服务工具和全链路应用开发套件，预置丰富的能力插件，提供API及SDK等便捷的集成方式，高效完成大模型应用构建",
                "workspace_id": "ws_3Nt27MYcoK191ISp",
                "hier_title": "阿里云百炼文档",
                "doc_name": "阿里云百炼文档介绍.pdpf",
                "pipeline_id": "rhdc8n12s0",
                "_id": "ws_3Nt27MYcoK191ISp_rhdc8n12s0_doc_062fccb18e23408a84b20ce3af1b0e8810021401_0_0"
                }`
             */
            Metadata: any;
        }[];
    };
    /**
     * 错误状态码
     * @example `Index.InvalidParameter`
     */
    Code: string;
    /**
     * 错误信息，有错误信息时返回该值
     * @example `Required parameter(%s) missing or invalid, please check the request parameters.`
     */
    Message: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
}
