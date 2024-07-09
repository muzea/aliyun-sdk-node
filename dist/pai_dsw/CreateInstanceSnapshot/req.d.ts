export interface CreateInstanceSnapshotRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 实例快照属性。
     */
    "body"?: {
        /**
         * 实例快照名称。
         * @example `training_data_env`
         */
        SnapshotName: string;
        /**
         * 实例快照描述。
         * @example `training_data_env`
         */
        SnapshotDescription: string;
        /**
         * 镜像地址。如何获取镜像地址，请参见[ListImages](~~449118~~)。
         * @example `registry.cn-shanghai.aliyuncs.com/pai_product/tensorflow:py36_cpu_tf1.12_ubuntu`
         */
        ImageUrl: string;
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
        ExcludePaths: string[];
        Overwrite: boolean;
    };
}
