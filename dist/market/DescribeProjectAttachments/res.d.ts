export interface DescribeProjectAttachmentsResponse {
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求标识
     * @example `e03a9f78-7b40-4fb3-a015-350913e37e3f`
     */
    RequestId: string;
    Result: {
        /**
         * 文件地址生效截止时间（unix时间戳）
         * @example `1589334682404`
         */
        FileLinkGmtExpired: number;
        /**
         * 流程节点序号
         * @example `3`
         */
        StepNo: number;
        /**
         * 附件MD5
         * @example `Mzc4NDAtODQ3MjY4MzI=`
         */
        AttachmentToken: string;
        /**
         * 文件名称
         * @example `f8-test-perview.jpeg`
         */
        FileName: string;
        /**
         *  操作人角色
         * @example `Provider`
         */
        OperatorRole: string;
        /**
         * 节点名称
         * @example `等待服务开通`
         */
        NodeName: string;
        /**
         * 操作人名称
         * @example `**科技技术有限公司`
         */
        OperatorName: string;
        /**
         * 文件访问地址
         * @example `http://delivery-center.oss-cn-shanghai.aliyuncs.com/6a8****0e2/e0a***f3.jpg?Expires=1589334682&OSSAccessKeyId=wI2r*********&Signature=JWB39pUxs7RCqrcw58qXPEGu6M0%3D`
         */
        FileLink: string;
        /**
         * 附件上传时间（Unix时间戳）
         * @example `1587968858000`
         */
        GmtCreate: number;
        /**
         * 文件后缀
         * @example `jpg`
         */
        FileSuffix: string;
        /**
         * 操作人阿里云UID
         * @example `45261111****`
         */
        Operator: number;
        /**
         * 内容文本
         * @example `无`
         */
        Content: string;
        /**
         * 附件上传的流程节点ID
         * @example `8472`
         */
        NodeId: number;
        /**
         * 附件类型
         * @example `File`
         */
        AttachmentType: string;
        /**
         * 文件大小（byte）
         * @example `109124`
         */
        FileSize: number;
    }[];
}
