export interface PublishServiceVersionResponse {
    /**
     * 服务版本的创建时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    createdTime: string;
    /**
     * 服务的版本描述。
     * @example `test_description`
     */
    description: string;
    /**
     * 服务的版本上一次被更新的时间。
     * @example `2016-08-15T16:06:05.000+0000`
     */
    lastModifiedTime: string;
    /**
     * 服务的版本号。
     * @example `1`
     */
    versionId: string;
}
