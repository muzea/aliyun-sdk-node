export interface ListPolicyGroupsResponse {
    /**
     * 请求ID。
     * @example `7B9EFA4F-4305-5968-BAEE-BD8B8DE5****`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `31`
     */
    TotalCount: number;
    /**
     * 用来表示当前调用返回读取到的位置。空代表数据已经读取完毕。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uON****`
     */
    NextToken: string;
    /**
     * 策略信息。
     */
    PolicyGroupModel: {
        /**
         * 策略ID。
         * @example `pg-9q6o8qpiy8opkj****`
         */
        PolicyGroupId: string;
        /**
         * 策略名称。
         * @example `默认策略。`
         */
        PolicyGroupName: string;
        /**
         * 创建时间
         * @example `2024-06-04 10:28:54`
         */
        GmtCreate: string;
        /**
         * 剪切板权限。
         * @example `readwrite`
         */
        Clipboard: string;
        /**
         * HTML5客户端文件传输策略。
         * @example `download`
         */
        Html5FileTransfer: string;
        /**
         * 是否开启本地摄像头重定向。
         * @example `on`
         */
        CameraRedirect: string;
        /**
         * 本地磁盘映射权限。
         * @example `off`
         */
        LocalDrive: string;
        /**
         * 分辨率的高度。
         * @example `1080`
         */
        SessionResolutionHeight: string;
        /**
         * 分辨率的宽度。
         * @example `1920`
         */
        SessionResolutionWidth: string;
    }[];
}
