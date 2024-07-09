export interface AddIpfilterRequest {
    /**
     * IP地址/IP区间/IP段
     * @example `单个IP格式，如：xxx.xxx.xxx.xxx
    IP区间格式，如：xxx.xxx.xxx.xxx-xxx.xxx.xxx.xxx
    IP段格式，如：xxx.xxx.xxx.xxx/xxx`
     */
    "IpAddress": string;
}
