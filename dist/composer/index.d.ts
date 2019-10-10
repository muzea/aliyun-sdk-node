import { DeleteFlowRequest } from "./DeleteFlow/req";
import { DeleteFlowResponse } from "./DeleteFlow/res";
import { GetVersionRequest } from "./GetVersion/req";
import { GetVersionResponse } from "./GetVersion/res";
import { EnableFlowRequest } from "./EnableFlow/req";
import { EnableFlowResponse } from "./EnableFlow/res";
import { ListVersionsRequest } from "./ListVersions/req";
import { ListVersionsResponse } from "./ListVersions/res";
import { ListFlowsRequest } from "./ListFlows/req";
import { ListFlowsResponse } from "./ListFlows/res";
import { UpdateFlowRequest } from "./UpdateFlow/req";
import { UpdateFlowResponse } from "./UpdateFlow/res";
import { DisableFlowRequest } from "./DisableFlow/req";
import { DisableFlowResponse } from "./DisableFlow/res";
import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { CloneFlowRequest } from "./CloneFlow/req";
import { CloneFlowResponse } from "./CloneFlow/res";
import { GetFlowRequest } from "./GetFlow/req";
import { GetFlowResponse } from "./GetFlow/res";
import { InvokeFlowRequest } from "./InvokeFlow/req";
import { InvokeFlowResponse } from "./InvokeFlow/res";

interface COMPOSER {
    /**
    * 删除一个工作流编排实例
    */ DeleteFlow(query: DeleteFlowRequest): Promise<DeleteFlowResponse>;
    /**
    * 查询某个工作流的某个特定版本信息
    */ GetVersion(query: GetVersionRequest): Promise<GetVersionResponse>;
    /**
    * 启用一个工作流编排实例
    */ EnableFlow(query: EnableFlowRequest): Promise<EnableFlowResponse>;
    /**
    * 查询某个工作流编排实例的版本列表
    */ ListVersions(query: ListVersionsRequest): Promise<ListVersionsResponse>;
    /**
    * 查询工作流编排实例列表
    */ ListFlows(query: ListFlowsRequest): Promise<ListFlowsResponse>;
    /**
    * 更新一个工作流编排实例的信息
    */ UpdateFlow(query: UpdateFlowRequest): Promise<UpdateFlowResponse>;
    /**
    * 禁用一个工作流编排实例
    */ DisableFlow(query: DisableFlowRequest): Promise<DisableFlowResponse>;
    /**
    * 创建一个工作流编排实例
    */ CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    /**
    * 克隆一个工作流编排实例
    */ CloneFlow(query: CloneFlowRequest): Promise<CloneFlowResponse>;
    GetFlow(query: GetFlowRequest): Promise<GetFlowResponse>;
    InvokeFlow(query: InvokeFlowRequest): Promise<InvokeFlowResponse>;
}
export default COMPOSER;
