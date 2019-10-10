interface DescribeRoomListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 业务方APP ID。
    * @example `live-app`
    */ "AppId": string;
    /**
    * 房间ID
    * @example `live-room`
    */ "RoomId"?: string;
    /**
    * 创建房间时输入的主播ID
    * @example `live-anchord`
    */ "AnchorId"?: string;
    /**
    * 状态。
    *
    * - 0：流关闭，
    *
    * - 1：流开启，
    *
    * - 2：流中断。
    * @example `1`
    */ "RoomStatus"?: number;
    /**
    * 查询范围开始时间，格式：yyyy-MM-dd'T'HH:mm:ss'Z'
    * @example `2019-01-19T00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 查询范围结束时间，格式：yyyy-MM-dd'T'HH:mm:ss'Z'
    * @example `2019-01-19T12:11:00Z`
    */ "EndTime"?: string;
    /**
    * 返回按创建时间排序，取值： asc , desc, 默认：desc 降序
    * @example `asc`
    */ "Order"?: string;
    /**
    * 页码。 默认：1
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页数量。 默认：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeRoomListRequest };