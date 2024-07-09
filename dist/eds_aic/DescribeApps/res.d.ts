export interface DescribeAppsResponse {
    /**
     * 请求ID。
     * @example `CB95E410-FD1D-53C5-9F7D-93CC44D7****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `10`
     */
    TotalCount: string;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****`
     */
    NextToken: string;
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * 应用名称。
         * @example `testapp`
         */
        AppName: string;
        /**
         * 应用ID。
         * @example `10404`
         */
        AppId: number;
        /**
         * 应用版本。
         * @example `1.0.0`
         */
        AndroidAppVersion: string;
        /**
         * 应用图标地址。
         * @example `https://test.png`
         */
        IconUrl: string;
        /**
         * 应用已经安装的实例组列表。
         */
        InstanceGroupList: string[];
        /**
         * 创建时间。
         * @example `2022-08-11 17:45:03`
         */
        GmtCreate: string;
        /**
         * 最近一次修改时间。
         * @example `2022-08-11 17:45:03`
         */
        GmtModified: string;
        /**
         * 应用描述。
         * @example `应用描述信息`
         */
        Description: string;
        /**
         * 应用状态。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 应用的安装/卸载状态。
         * @example `INSTALLING`
         */
        InstallationStatus: string;
        BizRegionId: string;
    }[];
}
