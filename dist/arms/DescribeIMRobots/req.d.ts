export interface DescribeIMRobotsRequest {
    /**
     * IM机器人名称。
     * @example `robot名称`
     */
    "RobotName"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的IM机器人数。
     * @example `20`
     */
    "Size": number;
    /**
     * 机器人ID列表。
     * @example `123`
     */
    "RobotIds"?: string;
}
