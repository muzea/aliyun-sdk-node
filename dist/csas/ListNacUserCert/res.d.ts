export interface ListNacUserCertResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 符合条件的总个数。
     * @example `1`
     */
    TotalNum: number;
    /**
     * 用户入网证书状态数据列表。
     */
    DataList: {
        /**
         * 用户名。
         * @example `zhang**`
         */
        Username: string;
        /**
         * 阿里云账号ID。
         * @example `1`
         */
        Aliuid: string;
        /**
         * 到期时间。
         * @example `2029-06-30 09:31:54`
         */
        ExpiredTime: string;
        /**
         * 用户所属部门。
         * @example `外包`
         */
        Department: string;
        /**
         * 终端设备操作系统类型。取值：
         * - **windows**：Windows系统。
         * - **macos**：macOS系统。
         * - **linux**：Linux系统。
         * - **android**：Android系统。
         * - **ios**：iOS系统。
         * @example `windows`
         */
        DeviceType: string;
        /**
         * 入网用户证书状态。取值：
         * - **Enabled**：开启。
         * - **Disabled**：关闭。
         * @example `Disabled`
         */
        Status: string;
        /**
         * 用户ID。
         * @example `su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****`
         */
        UserId: string;
        /**
         * 终端设备ID。
         * @example `36efa42d-2c32-c4dc-e3fc-8541e33a****`
         */
        DevTag: string;
        /**
         * 终端设备名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、半角逗号（,）、半角分号（;）、短划线（-）、下划线（\_）、分隔号（/）、at（@）和空格。单独输入下划线（\_）将额外查询所有名称中带4字节utf-8字符的终端设备。
         * @example `MS-XU****`
         */
        Hostname: string;
        /**
         * 终端设备MAC地址。
         * @example `08:f8:**:**:**:5e`
         */
        Mac: string;
    }[];
}
