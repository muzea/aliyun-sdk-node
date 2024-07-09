export interface DescribeImagesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `4636DBE0-BBB4-4076-8B8E-94D21A9A3CFB`
     */
    RequestId: string;
    /**
     * 镜像信息组成的集合。
     */
    Images: {
        /**
         * 镜像的创建时间。
         * @example `2018-01-10T01:01:10Z`
         */
        CreationTime: string;
        /**
         * 镜像状态。
         * @example `Available`
         */
        Status: string;
        /**
         * 镜像创建完成的进度。单位：%。
         * @example `100%`
         */
        Progress: string;
        /**
         * 数据盘大小。单位：GiB。
         * @example `150`
         */
        DataDiskSize: number;
        /**
         * 镜像类型。
         * @example `SYSTEM`
         */
        ImageType: string;
        /**
         * 镜像描述。
         * @example `This is description.`
         */
        Description: string;
        /**
         * 镜像大小。单位：GiB。
         * @example `40`
         */
        Size: number;
        /**
         * 操作系统类型。
         * @example `WINDOWS`
         */
        OsType: string;
        /**
         * 协议类型。
         * @example `ASP`
         */
        ProtocolType: string;
        /**
         * 镜像名称。
         * @example `testImageName`
         */
        Name: string;
        /**
         * 镜像ID。
         * @example `m-gx2x1dhsmusr2****`
         */
        ImageId: string;
        /**
         * 是否为GPU类型镜像。
         * @example `false`
         */
        GpuCategory: boolean;
        /**
         * 操作系统语言。
         */
        SupportedLanguages: string[];
        /**
         * GPU驱动版本号。
         * @example `417.22`
         */
        GpuDriverVersion: string;
        /**
         * 镜像版本。
         * @example `1.0.0`
         */
        AppVersion: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 开启磁盘加密的情况下使用的KMS的密钥ID。可通过[ListKeys](~~28951~~)接口获取。
         * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
         */
        VolumeEncryptionKey: string;
        /**
         * 已共享的镜像数量。
         * @example `1`
         */
        SharedCount: number;
        /**
         * 镜像会话类型。
         * @example `MULTIPLE_SESSION`
         */
        SessionType: string;
        /**
         * 最后修改镜像的时间。
         * @example `2021-12-22T02:48:43Z`
         */
        UpdateTime: string;
        /**
         * 镜像的操作系统类型。
         * @example `Windows Server 2019`
         */
        Platform: string;
    }[];
}
