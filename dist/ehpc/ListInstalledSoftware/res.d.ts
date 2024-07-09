export interface ListInstalledSoftwareResponse {
    /**
     * 请求ID。
     * @example `DDCA0E7B-03E7-430D-810C-0D508539****`
     */
    RequestId: string;
    SoftwareList: {
        /**
         * 已安装的软件列表。
         */
        SoftwareList: {
            /**
             * 软件ID。
             * @example `MPICH_3.2`
             */
            SoftwareId: string;
            /**
             * 软件安装状态。可能值：
             * - Installing：安装中
             * - Installed：已安装
             * @example `Installing`
             */
            SoftwareStatus: string;
            /**
             * 软件版本。
             * @example `3.2`
             */
            SoftwareVersion: string;
            /**
             * 软件名称。
             * @example `mpich`
             */
            SoftwareName: string;
        }[];
    };
}
