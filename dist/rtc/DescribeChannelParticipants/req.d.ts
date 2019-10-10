interface DescribeChannelParticipantsRequest {
    "RegionId"?: string;
    /**
    * 应用ID。
    * @example `sad123`
    */ "AppId": string;
    /**
    * 用户加入的频道。
    * @example `123`
    */ "ChannelId": string;
    "OwnerId"?: number;
    /**
    * 不输入该参数默认为**desc**取最近记录。
    * - 递增：**asc**。
    * - 递减：**desc**。
    * @example `asc`
    */ "Order"?: string;
    /**
    * 不输入默认**1**页，必须大于**0**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 不输入如默认为**10**， 必须大于**0**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeChannelParticipantsRequest };