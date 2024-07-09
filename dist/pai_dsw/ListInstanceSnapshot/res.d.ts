export interface ListInstanceSnapshotResponse {
    /**
     * 请求ID。
     * @example `E7D55162-4489-1619-AAF5-3F97D5FCA948`
     */
    RequestId: string;
    /**
     * 成功标志，可能值：
     * - true
     * - false
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果说明。
     * @example `"XXX"`
     */
    Message: string;
    /**
     * 状态码，可能值：
     * - InternalError：内部错误（除了参数验证错误外的其他错误，目前都归类到内部错误）。
     * - ValidationError：参数验证错误。
     * @example `null`
     */
    Code: string;
    /**
     * HTTP状态码，可能值：
     * - 400
     * - 404
     * @example `null`
     */
    HttpStatusCode: number;
    /**
     * 实例总数。
     * @example `35`
     */
    TotalCount: number;
    /**
     * 本分页中请求的实例镜像列表。
     */
    Snapshots: {
        /**
         * 实例ID。
         * @example `dsw-730xxxxxxxxxx`
         */
        InstanceId: string;
        /**
         * 实例快照ID。
         * @example `snp-05cexxxxxxxxx`
         */
        SnapshotId: string;
        /**
         * 实例快照名称。
         * @example `training_data_env`
         */
        SnapshotName: string;
        /**
         * 实例快照状态。
         * @example `Pushing`
         */
        Status: string;
        /**
         * 实例快照的镜像ID。
         * @example `image-05cefd0be2exxxx`
         */
        ImageId: string;
        /**
         * 实例快照的镜像地址。
         * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
         */
        ImageUrl: string;
        /**
         * 实例快照错误代码。
         * @example `Internal Error`
         */
        ReasonCode: string;
        /**
         * 实例快照错误消息。
         * @example `ImagePullBackOff`
         */
        ReasonMessage: string;
        /**
         * 实例快照创建时间。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtCreateTime: string;
        /**
         * 实例快照修改时间。
         * @example `2021-01-12T14:36:01Z`
         */
        GmtModifiedTime: string;
        /**
         * 用户自定义标签。
         * @example `{'foo': 'bar'}`
         */
        Labels: {
            /**
             * 用户定义标签键。
             * @example `stsTokenOwner`
             */
            Key: string;
            /**
             * 用户定义标签值。
             * @example `123xxxxxxxx`
             */
            Value: string;
        }[];
        /**
         * 排除文件路径列表，仅支持 ECI 实例设置， 用于制作镜像时忽略指定文件夹或文件
         * @example `["/path1","/path2"]`
         */
        ExcludePaths: string[];
    }[];
}
