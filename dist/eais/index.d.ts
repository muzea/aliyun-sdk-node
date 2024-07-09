import { AttachEaiRequest } from "./AttachEai/req";
import { AttachEaiResponse } from "./AttachEai/res";
import { CreateEaiRequest } from "./CreateEai/req";
import { CreateEaiResponse } from "./CreateEai/res";
import { DeleteEaiAllRequest } from "./DeleteEaiAll/req";
import { DeleteEaiAllResponse } from "./DeleteEaiAll/res";
import { DeleteEaiRequest } from "./DeleteEai/req";
import { DeleteEaiResponse } from "./DeleteEai/res";
import { DescribeEaisRequest } from "./DescribeEais/req";
import { DescribeEaisResponse } from "./DescribeEais/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DetachEaiRequest } from "./DetachEai/req";
import { DetachEaiResponse } from "./DetachEai/res";
import { CreateEaiJupyterRequest } from "./CreateEaiJupyter/req";
import { CreateEaiJupyterResponse } from "./CreateEaiJupyter/res";
import { GetInstanceMetricsRequest } from "./GetInstanceMetrics/req";
import { GetInstanceMetricsResponse } from "./GetInstanceMetrics/res";
import { CreateEaiEcsRequest } from "./CreateEaiEcs/req";
import { CreateEaiEcsResponse } from "./CreateEaiEcs/res";
import { CreateEaiEciRequest } from "./CreateEaiEci/req";
import { CreateEaiEciResponse } from "./CreateEaiEci/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { DetachEaisEiRequest } from "./DetachEaisEi/req";
import { DetachEaisEiResponse } from "./DetachEaisEi/res";
import { StartEaisEiRequest } from "./StartEaisEi/req";
import { StartEaisEiResponse } from "./StartEaisEi/res";
import { AttachEaisEiRequest } from "./AttachEaisEi/req";
import { AttachEaisEiResponse } from "./AttachEaisEi/res";
import { CreateEaisEiRequest } from "./CreateEaisEi/req";
import { CreateEaisEiResponse } from "./CreateEaisEi/res";
import { StopEaisEiRequest } from "./StopEaisEi/req";
import { StopEaisEiResponse } from "./StopEaisEi/res";
import { DeleteEaisEiRequest } from "./DeleteEaisEi/req";
import { DeleteEaisEiResponse } from "./DeleteEaisEi/res";

interface EAIS {
    /**
     * 创建弹性加速计算实例EAIS实例后，您需要调用API AttachEai将该EAIS实例绑定到客户端实例（ECS实例或ECI实例）上，才能为客户端实例提供GPU资源。
     */
    AttachEai(query: AttachEaiRequest): Promise<AttachEaiResponse>;
    /**
     * 您可以调用API CreateEai创建一个EAIS，并将EAIS实例绑定到客户端实例（ECS实例或ECI实例）上来灵活地为客户端实例提供业务所需的GPU资源并节省成本。以ECS实例为例，您可以通过在ECS实例（非GPU实例）上绑定一个弹性加速计算实例EAIS，即可生成一款新规格的GPU实例，且使用该方式相比直接购买GPU实例，可以实现GPU资源的弹性使用（您可以根据实际需要绑定、解绑或释放EAIS实例），有效为您降低部署成本和使用成本。
     */
    CreateEai(query: CreateEaiRequest): Promise<CreateEaiResponse>;
    /**
     * 释放一个弹性加速计算实例和与其绑定的客户端实例（即ECS实例或ECI实例）。
     */
    DeleteEaiAll(query: DeleteEaiAllRequest): Promise<DeleteEaiAllResponse>;
    /**
     * 如果您不再需要使用弹性加速计算实例EAIS，您可以调用API DeleteEai释放该EAIS实例。
     */
    DeleteEai(query: DeleteEaiRequest): Promise<DeleteEaiResponse>;
    /**
     * 调用API DescribeEais查询一个或多个已创建的弹性加速计算实例EAIS的详细信息，例如EAIS的实例ID、实例状态、实例规格、EAIS实例绑定的客户端实例（ECS实例或ECI实例）等信息。
     */
    DescribeEais(query: DescribeEaisRequest): Promise<DescribeEaisResponse>;
    /**
     * 查询您可以使用的阿里云地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 为满足您业务的灵活性，您可以根据业务需要，调用API DetachEai从客户端实例（即ECS实例或ECI实例）上解绑目标弹性加速计算实例EAIS。解绑ECS实例后，您的客户端实例将失去EAIS实例提供的加速效果。
     */
    DetachEai(query: DetachEaiRequest): Promise<DetachEaiResponse>;
    /**
     * 创建一个部署了notebook的弹性加速计算实例。
     */
    CreateEaiJupyter(query: CreateEaiJupyterRequest): Promise<CreateEaiJupyterResponse>;
    /**
     * 查询EAIS Jupyter实例的监控数据，包括GPU使用率、GPU Memory使用率、CPU使用率、Memory使用率。
     */
    GetInstanceMetrics(query: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse>;
    /**
     * 创建一个弹性加速计算实例和一个客户端ECS实例，并将弹性加速计算实例绑定到ECS实例上。
     */
    CreateEaiEcs(query: CreateEaiEcsRequest): Promise<CreateEaiEcsResponse>;
    /**
     * 创建一个弹性加速计算实例和一个客户端ECI实例，并将弹性加速计算实例绑定到ECI实例上。
     */
    CreateEaiEci(query: CreateEaiEciRequest): Promise<CreateEaiEciResponse>;
    /**
     * 修改弹性加速计算实例所在的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 为满足您业务的灵活性，您可以根据业务需要，调用API DetachEaisEi从客户端实例（即ECS实例或ECI实例）上解绑目标弹性加速计算实例EAIS。解绑ECS实例后，您的客户端实例将失去EAIS实例提供的加速效果。
     */
    DetachEaisEi(query: DetachEaisEiRequest): Promise<DetachEaisEiResponse>;
    /**
     * 当您创建好EAIS实例并挂载到目标客户端实例后，您可以调用API StartEaisEi启动一个弹性加速计算实例EAIS来为您的客户端提供GPU资源，以实现GPU资源的灵活扩展。
     */
    StartEaisEi(query: StartEaisEiRequest): Promise<StartEaisEiResponse>;
    /**
     * 创建弹性加速计算实例EAIS实例后，您需要调用API AttachEaisEi将该EAIS实例绑定到客户端实例（ECS实例或ECI实例）上，才能为客户端实例提供GPU资源。
     */
    AttachEaisEi(query: AttachEaisEiRequest): Promise<AttachEaisEiResponse>;
    /**
     * 您可以调用API CreateEaisEi创建一个EAIS，并将EAIS实例绑定到客户端实例（ECS实例或ECI实例）上来灵活地为客户端实例提供业务所需的GPU资源并节省成本。以ECS实例为例，您可以通过在ECS实例（非GPU实例）上绑定一个弹性加速计算实例EAIS，即可生成一款新规格的GPU实例，且使用该方式相比直接购买GPU实例，可以实现GPU资源的弹性使用（您可以根据实际需要绑定、解绑或释放EAIS实例），有效为您降低部署成本和使用成本。
     */
    CreateEaisEi(query: CreateEaisEiRequest): Promise<CreateEaisEiResponse>;
    /**
     * 如果您不再需要使用弹性加速计算实例为您的客户端实例提供GPU资源时，可以调用API StopEaisEi停止该EAIS实例，从而避免资源浪费，节约成本。
     */
    StopEaisEi(query: StopEaisEiRequest): Promise<StopEaisEiResponse>;
    /**
     * 如果您不再需要使用弹性加速计算实例EAIS，您可以调用API DeleteEaisEi释放该EAIS实例。
     */
    DeleteEaisEi(query: DeleteEaisEiRequest): Promise<DeleteEaisEiResponse>;
}
export default EAIS;
