interface DescribeForbidPushStreamRoomListRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 业务方APP ID。
    * @example `live-app`
    */ "AppId": string;
    /**
    * 支持的创建时间排列方式，递增：asc， 降序：desc  默认：desc 降序
    * @example `desc`
    */ "Order"?: string;
    /**
    * 页码。 默认：1
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 每页数量。 默认：10
    * @example `3`
    */ "PageSize"?: number;
}
export { DescribeForbidPushStreamRoomListRequest };