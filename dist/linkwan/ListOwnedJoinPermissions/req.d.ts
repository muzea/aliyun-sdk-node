interface ListOwnedJoinPermissionsRequest {
    "RegionId"?: string;
    /**
    * 本次查询的起始位置，从 0 开始。
    * @example `0`
    */ "Offset": number;
    /**
    * 本次查询的入网凭证的数量上限，大于等于 1。
    * @example `2`
    */ "Limit": number;
    /**
    * 模糊匹配入网凭证租户的阿里云账号ID。
    * @example `some-user`
    */ "FuzzyRenterAliyunId"?: string;
    /**
    * 模糊匹配入网凭证所使用的JoinEUI。
    * @example `d896e0`
    */ "FuzzyJoinEui"?: string;
    /**
    * 根据入网凭证的启停用状态过滤。
    * @example `false`
    */ "Enabled"?: boolean;
    /**
    * 模糊匹配入网凭证的名称。
    * @example `凭证1`
    */ "FuzzyJoinPermissionName"?: string;
    /**
    * 指定排序字段，可取值为**CREATED_MILLIS**, 表示根据创建时间排序。
    * @example `CREATED_MILLIS`
    */ "SortingField"?: string;
    /**
    * 配合**SortingField**参数一起使用，**true**表示升序，**false**表示降序。
    * @example `true`
    */ "Ascending"?: boolean;
}
export { ListOwnedJoinPermissionsRequest };