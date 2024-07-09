export interface CsiGetFileInfoResponse {
    /**
     * 审核信息
     */
    investigation_info: any;
    /**
     * 文件下载链接
     * @example `https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899eff525?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
     */
    url: string;
}
