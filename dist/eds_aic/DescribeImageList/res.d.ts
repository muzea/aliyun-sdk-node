export interface DescribeImageListResponse {
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****`
     */
    NextToken: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 阿里云账号ID。
         * @example `117819727354****`
         */
        AliUid: number;
        /**
         * 描述。
         * @example `description`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `2024-02-01 10:56:36
        `
         */
        GmtCreate: string;
        /**
         * 修改时间
         * @example `2024-02-01 10:56:36
        `
         */
        GmtModified: string;
        /**
         * 镜像ID。
         * @example `imgc-075cllfeuazh****`
         */
        ImageId: string;
        /**
         * 镜像类型。
         * @example `System`
         */
        ImageType: string;
        /**
         * 语言。
         * @example `zh`
         */
        Language: string;
        /**
         * 镜像名称。
         * @example `IMAGE`
         */
        ImageName: string;
        /**
         * 可用地域列表。
         */
        ImageRegionList: string[];
        /**
         * 镜像状态。
         * @example `AVAILABLE`
         */
        Status: string;
        /**
         * 操作系统类型。
         * @example `Android 12`
         */
        SystemType: string;
        /**
         * 镜像分发地域信息，key为地域，value为分发信息。
         */
        ImageRegionDistributeMap: any;
    }[];
    /**
     * 总条目数。
     * @example `30`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `620740FF-492F-5956-B1BA-361E966C0269`
     */
    RequestId: string;
}
