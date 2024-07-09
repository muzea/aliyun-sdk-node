export interface StopStreamRequest {
    /**
     * 流ID。
     * @example `32388487****92997-cn-qingdao`
     */
    "Id": string;
    /**
     * 流名称。
     * @example `31000000*****0000002`
     */
    "Name"?: string;
    /**
     * 流重启触发时间。
     * @example `2021-12-12T10:00:00Z`
     */
    "StartTime"?: string;
}
