interface ListGatewaysRequest {
    "RegionId"?: string;
    /**
    * 本次查询的起始位置，从0开始。
    * @example `0`
    */ "Offset": number;
    /**
    * 本次查询的网关数量上限，大于等于1。
    * @example `2`
    */ "Limit": number;
    /**
    * 网关在离线状态过滤。
    * 如未传入此参数，则不限制在线状态。可取值为：**ONLINE**, **OFFLINE**。
    * @example `ONLINE`
    */ "OnlineState"?: string;
    /**
    * GwEUI模糊过滤。
    * @example `123456`
    */ "FuzzyGwEui"?: string;
    /**
    * 城市名模糊过滤。
    * @example `CityName`
    */ "FuzzyCity"?: string;
    /**
    * 网关名称模糊过滤。
    * @example `GatewayName`
    */ "FuzzyName"?: string;
    /**
    * 网关频段ID过滤。
    * @example `123`
    */ "FreqBandPlanGroupId"?: number;
    /**
    * 网关启停用状态过滤。
    * 如未传入此参数，则不限制启停状态。
    * @example `true`
    */ "IsEnabled"?: boolean;
    /**
    * 指定排序字段，可取值为**ONLINE_STATE_CHANGED_MILLIS**。
    * @example `ONLINE_STATE_CHANGED_MILLIS`
    */ "SortingField"?: string;
    /**
    * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
    * @example `true`
    */ "Ascending"?: boolean;
}
export { ListGatewaysRequest };