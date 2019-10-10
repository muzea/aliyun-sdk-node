interface DescribeSmartAccessGatewaysRequest {
    /**
    * 智能接入网关的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 绑定的云连接网ID。
    * @example `ccn-bxuau4ezctt******`
    */ "AssociatedCcnId"?: string;
    /**
    * 智能接入网关ID。
    * @example `sag-c3m3n1khz58l******`
    */ "SmartAGId"?: string;
    /**
    * 智能接入网关状态，取值：
    * - Ordered：已下单
    * - Delivered：已发货
    *
    * - Received：已收货
    * - Returning：退货中
    * - ACTIVE：活跃
    * - Init：初始化
    * @example `Ordered`
    */ "Status"?: string;
    /**
    * 智能接入网关名称。
    * @example `sag`
    */ "Name"?: string;
    /**
    * 分页查询时设置的每页行数，默认值为10，最大值为50。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * 实例状态列表的页码，默认值是1。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 智能接入网关的序列号。
    * @example `sag32a30121`
    */ "SerialNumber"?: string;
    /**
    * 智能接入网关实例绑定的访问控制规则。
    * @example `acl-xhwhyuo43l0n******`
    */ "AclIds"?: string;
    /**
    * 未关联到该ACL，多个ID用逗号隔开。
    * @example `acl-sjfbgngj***************`
    */ "UnboundAclIds"?: string;
    /**
    * 实例类型。
    * @example `sag-100wm`
    */ "InstanceType"?: string;
    "CanAssociateQos"?: boolean;
}
export { DescribeSmartAccessGatewaysRequest };