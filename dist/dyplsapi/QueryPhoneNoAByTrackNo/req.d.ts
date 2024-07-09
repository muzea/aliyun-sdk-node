export interface QueryPhoneNoAByTrackNoRequest {
    /**
     * 运单号。
     * @example `22573****`
     */
    "trackNo": string;
    /**
     * 柜机号。
     * @example `25689****`
     */
    "CabinetNo"?: string;
    /**
     * 创建绑定关系API接口所返回的X号码。
     * @example `1710000****`
     */
    "PhoneNoX"?: string;
}
