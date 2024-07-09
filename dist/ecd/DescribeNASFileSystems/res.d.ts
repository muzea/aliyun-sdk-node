export interface DescribeNASFileSystemsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `269BDB16-2CD8-4865-84BD-11C40BC21DB0`
     */
    RequestId: string;
    /**
     * NAS文件系统信息集合。
     */
    FileSystems: {
        /**
         * NAS文件系统总容量，单位为GiB。
         * - 若存储规格为容量型，则容量固定为10 PiB，即10485760 GiB。
         * - 若存储规格为性能型，则容量固定为1 PiB，即1048576 GiB。
         * @example `10485760`
         */
        Capacity: number;
        /**
         * 挂载点状态。
         * @example `Active`
         */
        MountTargetStatus: string;
        /**
         * NAS文件系统的创建时间。
         * @example `2021-05-10T11:39Z`
         */
        CreateTime: string;
        /**
         * 工作区ID。
         * @example `cn-hangzhou+dir-363353****`
         */
        OfficeSiteId: string;
        /**
         * 是否支持开启SMB ACL功能。
         * @example `false`
         */
        SupportAcl: boolean;
        /**
         * NAS文件系统的存储规格。
         * @example `Capacity`
         */
        StorageType: string;
        /**
         * 工作区名称。
         * @example `test`
         */
        OfficeSiteName: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * NAS文件系统ID。
         * @example `04f314****`
         */
        FileSystemId: string;
        /**
         * NAS文件系统的类型，目前仅支持通用型，即`standard`。
         * @example `standard`
         */
        FileSystemType: string;
        /**
         * NAS文件系统名称。
         * @example `testNAS`
         */
        FileSystemName: string;
        /**
         * NAS文件系统已使用的容量，单位为Byte。
         * @example `0`
         */
        MeteredSize: number;
        /**
         * 挂载点域名。
         * @example `04f314****-at***.cn-hangzhou.nas.aliyuncs.com`
         */
        MountTargetDomain: string;
        /**
         * NAS文件系统描述。
         * @example `testDescription`
         */
        Description: string;
        /**
         * 可用区。
         * @example `cn-hangzhou-f`
         */
        ZoneId: string;
        /**
         * NAS文件系统状态。
         * @example `Running`
         */
        FileSystemStatus: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        EncryptionEnabled: boolean;
        /**
         * 是否支持UPM（User Profile Management）功能。
         * @example `false`
         */
        ProfileCompatible: boolean;
        /**
         * 支持UPM的NAS绑定的桌面组对象列表。
         */
        DesktopGroups: {
            /**
             * 桌面组ID。
             * @example `dg-9eeyf15b25nyl****`
             */
            DesktopGroupId: string;
            /**
             * 桌面组名称。
             * @example `test_dg`
             */
            DesktopGroupName: string;
        }[];
    }[];
}
