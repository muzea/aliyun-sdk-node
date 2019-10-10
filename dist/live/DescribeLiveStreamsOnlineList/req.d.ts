interface DescribeLiveStreamsOnlineListRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `play.yourdomain.com`
    */ "DomainName": string;
    /**
    * 应用名称。
    * <note>AppName不支持通配符（*）查询，且不支持模糊查询。</note>
    * @example `testApp`
    */ "AppName"?: string;
    /**
    * 流名称。
    * <note>StreamName不支持通配符（*）查询，但支持模糊查询 。</note>
    * @example `myStream`
    */ "StreamName"?: string;
    /**
    * 每页大小，取值：**1~3000**之前的任意整数。最大值为**3000**，默认值为**2000**。
    * @example `1500`
    */ "PageSize"?: number;
    /**
    * 当前页码，默认值为**1**。
    * @example `1`
    */ "PageNum"?: number;
    /**
    * 流类型。取值范围：
    * - **all（默认值）**：查询所有流
    * - **raw**：查询原始流
    * - **trans**：查询转码流
    * @example `all`
    */ "StreamType"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    /**
    * 指定是否模糊匹配流名称。取值：
    * - **fuzzy**：模糊匹配
    * - **strict**：精准匹配
    * @example `fuzzy`
    */ "QueryType"?: string;
    "OrderBy"?: string;
}
export { DescribeLiveStreamsOnlineListRequest };