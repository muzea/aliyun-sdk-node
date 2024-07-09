export interface QueryGroupIdByGroupNameResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 查询到的分组ID。
     * @example `9935302`
     */
    GroupId: number;
}
