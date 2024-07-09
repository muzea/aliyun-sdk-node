export interface EnableCustomInstanceBlockRecordRequest {
    /**
     * 服务器的UUID。
     * @example `50d213b4-3a35-427a-b8a5-04b0c7e1****`
     */
    "Uuid": string;
    /**
     * 该机器需要开启的防暴力破解IP地址。
     * @example `192.168.xx.xx`
     */
    "BlockIp": string;
    /**
     * 服务器暴力破解拦截策略阻断IP的方向。
     * 取值：
     * - **in** ：入方向
     * - **out**： 出方向
     * @example `in`
     */
    "Bound"?: string;
}
