export interface DescribeClientEventsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `28A40F12-F340-442B-A35F-46EF6A03227B`
     */
    RequestId: string;
    /**
     * 用户事件。
     */
    Events: {
        /**
         * 事件行为状态，一般在`DESKTOP_DISCONNECT`和`GET_CONNECTION_TICKET`中出现。可能值：
         * - 200，表示成功。
         * - 返回失败信息，例如：FailedToGetConnectionTicket。
         * @example `200`
         */
        Status: string;
        /**
         * 已接收字节，单位：Byte。
         * @example `8665`
         */
        BytesReceived: string;
        /**
         * 云桌面的IP地址。
         * @example `10.10.*.*`
         */
        DesktopIp: string;
        /**
         * 事件发生的时间。
         * @example `2020-11-30T06:32:31Z`
         */
        EventTime: string;
        /**
         * 已发送字节，单位：Byte。
         * @example `2345`
         */
        BytesSend: string;
        /**
         * 云桌面所属的工作区ID。
         * @example `cn-hangzhou+dir-bh77qa8nmjot4****`
         */
        OfficeSiteId: string;
        /**
         * 事件关联的主账号信息。
         * @example `112259558861****`
         */
        AliUid: string;
        /**
         * 云桌面ID。
         * @example `ecd-8fupvkhg0aayu****`
         */
        DesktopId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 事件ID。
         * @example `5651188b-3070-d1cc-5311-75753d59****`
         */
        EventId: string;
        /**
         * 目录类型。
         * @example `RAM`
         */
        DirectoryType: string;
        /**
         * 事件类型。
         * @example `DESKTOP_DISCONNECT`
         */
        EventType: string;
        /**
         * 登录用户信息，RAM用户ID或者AD用户名。
         * @example `28961708130834****`
         */
        EndUserId: string;
        /**
         * 客户端IP。
         * @example `100.68.*.*`
         */
        ClientIp: string;
        /**
         * 客户端系统。
         * @example `Darwin 17.7.0 x64`
         */
        ClientOS: string;
        /**
         * 工作区的账号系统类型。
         * @example `SIMPLE`
         */
        OfficeSiteType: string;
        /**
         * 云桌面所属的目录ID。
         * @example `cn-hangzhou+dir-bh77qa8nmjot4****`
         */
        DirectoryId: string;
        /**
         * 客户端版本。
         * @example `1.0.4 202012021700`
         */
        ClientVersion: string;
        /**
         * 工作区名称。
         * @example `test`
         */
        OfficeSiteName: string;
        /**
         * 云桌面名称。
         * @example `test`
         */
        DesktopName: string;
        /**
         * 桌面组ID。
         * @example `dg-kadkdfaf****`
         */
        DesktopGroupId: string;
        /**
         * 桌面组名称。
         * @example `testName`
         */
        DesktopGroupName: string;
    }[];
}
