interface ListChangeOrdersRequest {
    "RegionId"?: string;
    /**
    * 应用ID
    * @example `145341c-9708-4967-b3ec-24933767fd44`
    */ "AppId": string;
    /**
    * 当前分页
    * @example `1`
    */ "CurrentPage"?: number;
    /**
    * 分页大小
    * @example `20`
    */ "PageSize"?: number;
    /**
    * 模糊查询值
    * @example `test`
    */ "Key"?: string;
    /**
    * 变更单类型
    * @example `CoCreateApp`
    */ "CoType"?: string;
    /**
    * 0：准备 1：执行中 2：执行成功 3：执行失败 6：终止 10：系统异常执行失败
    * @example `2`
    */ "CoStatus"?: string;
}
export { ListChangeOrdersRequest };