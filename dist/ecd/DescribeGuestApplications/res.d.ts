export interface DescribeGuestApplicationsResponse {
    /**
     * 请求ID。
     * @example `272CF39E-B5DE-5BE3-A09B-B43F1026****`
     */
    RequestId: string;
    /**
     * 应用信息列表。
     */
    Applications: {
        /**
         * 应用名称。
         * @example `Google Chrome`
         */
        ApplicationName: string;
        /**
         * 应用版本号。
         * @example `115.0.5790.110`
         */
        ApplicationVersion: string;
        /**
         * 进程路径。
         * @example `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`
         */
        ProcessPath: string;
        /**
         * 进程ID。
         * @example `1357`
         */
        Pid: number;
        /**
         * CPU使用率。
         * @example `0`
         */
        CpuPercent: number;
        /**
         * 内存使用率。
         * @example `1.8368155`
         */
        MemPercent: number;
        /**
         * GPU使用率。
         * @example `0`
         */
        GpuPercent: number;
        /**
         * IO读写速度。
         * @example `8919266`
         */
        IoSpeed: number;
        /**
         * 应用的图标地址。
         * @example `https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/market/preload/default****.png`
         */
        IconUrl: string;
        /**
         * 应用状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 进程信息列表。
         */
        ProcessData: {
            /**
             * 应用名称。
             * @example `Google Chrome`
             */
            ApplicationName: string;
            /**
             * 应用版本号。
             * @example `115.0.5790.110`
             */
            ApplicationVersion: string;
            /**
             * 进程路径。
             * @example `C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe`
             */
            ProcessPath: string;
            /**
             * 进程ID。
             * @example `1357`
             */
            Pid: number;
            /**
             * CPU使用率.。
             * @example `0`
             */
            CpuPercent: number;
            /**
             * 内存使用率。
             * @example `1.8368155`
             */
            MemPercent: number;
            /**
             * GPU使用率。
             * @example `0`
             */
            GpuPercent: number;
            /**
             * IO读写速度。
             * @example `8919266`
             */
            Iospeed: number;
        }[];
    }[];
}
