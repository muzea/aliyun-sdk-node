interface COMPOSER {
    /**
    * 删除一个工作流编排实例
    */ DeleteFlow(query: {
        "RegionId"?: string;
        /**
        * 需要删除的工作流编排实例 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
    }): Promise<{}>;
    /**
    * 查询某个工作流的某个特定版本信息
    */ GetVersion(query: {
        "RegionId"?: string;
        /**
        * 需要查询的工作流编排实例的 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
        /**
        * 需要查询的版本
        * @example `10`
        */ "VersionId": number;
    }): Promise<{}>;
    /**
    * 启用一个工作流编排实例
    */ EnableFlow(query: {
        "RegionId"?: string;
        /**
        * 需要启用的工作流编排实例的 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
    }): Promise<{}>;
    /**
    * 查询某个工作流编排实例的版本列表
    */ ListVersions(query: {
        "RegionId"?: string;
        /**
        * 需要查询的工作流编排实例的 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
        /**
        * 当前页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 每页返回的数量
        * @example `10`
        */ "PageSize"?: number;
    }): Promise<{}>;
    /**
    * 查询工作流编排实例列表
    */ ListFlows(query: {
        "RegionId"?: string;
        /**
        * 每页返回的数量
        * @example `10`
        */ "PageSize"?: number;
        /**
        * 当前页码
        * @example `1`
        */ "PageNumber"?: number;
        /**
        * 过滤特定的流程名称
        * @example `test`
        */ "FlowName"?: string;
    }): Promise<{}>;
    /**
    * 更新一个工作流编排实例的信息
    */ UpdateFlow(query: {
        "RegionId"?: string;
        /**
        * 需要更新的工作流编排实例的 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
        /**
        * 更新后的名称
        * @example `test`
        */ "FlowName"?: string;
        /**
        * 更新后的描述
        * @example `这是一个工作流的描述`
        */ "FlowDescription"?: string;
        /**
        * 更新后的工作流定义
        * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
        */ "Definition"?: string;
    }): Promise<{}>;
    /**
    * 禁用一个工作流编排实例
    */ DisableFlow(query: {
        "RegionId"?: string;
        /**
        * @example `lc-abcdefg`
        */ "FlowId": string;
    }): Promise<{}>;
    /**
    * 创建一个工作流编排实例
    */ CreateFlow(query: {
        "RegionId"?: string;
        /**
        * 工作流编排实例的名称
        * @example `test`
        */ "FlowName": string;
        /**
        * 工作流编排实例的描述
        * @example `这是一个工作流`
        */ "FlowDescription"?: string;
        /**
        * 工作流定义，需要将 JSON 格式化为 string
        * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
        */ "Definition"?: string;
    }): Promise<{}>;
    /**
    * 克隆一个工作流编排实例
    */ CloneFlow(query: {
        "RegionId"?: string;
        /**
        * 需要克隆的工作流编排实例的 ID
        * @example `lc-abcdefg`
        */ "FlowId": string;
        /**
        * 需要克隆的版本，如果不指定，则默认克隆最新版本
        * @example `10`
        */ "VersionId"?: number;
    }): Promise<{}>;
    GetFlow(query: {
        "RegionId"?: string;
        "FlowId": string;
    }): Promise<{}>;
    InvokeFlow(query: {
        "RegionId"?: string;
        "FlowId": string;
        "Parameters"?: string;
        "Data"?: string;
        "ClientToken"?: string;
    }): Promise<{}>;
}
export default COMPOSER;
