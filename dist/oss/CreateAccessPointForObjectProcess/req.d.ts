export interface CreateAccessPointForObjectProcessRequest {
    /**
     * 要创建对象FC接入点的Bucket。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 填写对象FC接入点名称。接入点命名规范说明如下：
     * - 命名长度不能超过63个字符
     * - 只允许包含小写字母、数字、短划线（-），且不能以短划线开头或结尾。
     * - 名称在当前地域必须唯一。
     * @example `fc-ap-01`
     */
    "x-oss-access-point-for-object-process-name": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 保存对象FC接入点信息的容器。
         */
        CreateAccessPointForObjectProcessConfiguration: {
            /**
             * OSS接入点名称。更多信息，请参见[创建接入点](~~2365063~~)。
             * @example `ap-01`
             */
            AccessPointName: string;
            /**
             * 保存对象处理信息的容器。
             */
            ObjectProcessConfiguration: any;
            /**
             * 是否允许匿名访问。
             * > 开启该选项之后将会允许匿名账号通过ObjectFC接入点访问您的Bucket，会产生相关费用。
             * @example `false`
             */
            AllowAnonymousAccessForObjectProcess: string;
        };
    };
}
