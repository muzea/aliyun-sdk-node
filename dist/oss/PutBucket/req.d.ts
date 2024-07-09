export interface PutBucketRequest {
    /**
     * Bucket名称。存储空间的命名规范如下：
     * - 只能包括小写字母、数字和短划线（-）。
     * - 必须以小写字母或者数字开头和结尾。
     * - 长度必须在3~63字符之间。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定Bucket的访问权限ACL。包含如下三种访问权限：
     * - public-read-write：公共读写
     * - public-read：公共读
     * - private：私有（默认值）
     * 关于Bucket访问权限ACL的更多信息，请参见[设置存储空间访问权限ACL](~~31843~~)。
     */
    "x-oss-acl"?: any;
    /**
     * 指定资源组ID。
     * - 如果在请求中携带该请求头并指定资源组ID，则创建的存储空间属于该资源组。当指定的资源组ID为rg-default-id时，创建的存储空间属于默认资源组。
     * - 如果在请求中未携带该请求头，则创建的存储空间属于默认资源组。
     * 您可以通过资源管理的控制台或ListResourceGroups接口获取资源组ID。具体操作，请分别参见[查看资源组基本信息](~~151181~~)和[ListResourceGroups](~~158855~~)。
     * > 创建无地域属性Bucket时不支持配置资源组。
     */
    "x-oss-resource-group-id"?: any;
    /**
     * 存储创建Bucket信息的容器。
     */
    "body"?: {
        /**
         * 创建Bucket时使用的配置信息。
         */
        CreateBucketConfiguration: any;
    };
}
