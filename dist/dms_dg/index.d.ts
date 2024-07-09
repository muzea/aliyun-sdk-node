import { AddDatabaseRequest } from "./AddDatabase/req";
import { AddDatabaseResponse } from "./AddDatabase/res";
import { AddDatabaseListRequest } from "./AddDatabaseList/req";
import { AddDatabaseListResponse } from "./AddDatabaseList/res";
import { CheckDGEnabledRequest } from "./CheckDGEnabled/req";
import { CheckDGEnabledResponse } from "./CheckDGEnabled/res";
import { ConnectDatabaseRequest } from "./ConnectDatabase/req";
import { ConnectDatabaseResponse } from "./ConnectDatabase/res";
import { CreateGatewayRequest } from "./CreateGateway/req";
import { CreateGatewayResponse } from "./CreateGateway/res";
import { CreateGatewayVerifyCodeRequest } from "./CreateGatewayVerifyCode/req";
import { CreateGatewayVerifyCodeResponse } from "./CreateGatewayVerifyCode/res";
import { DeleteDatabaseRequest } from "./DeleteDatabase/req";
import { DeleteDatabaseResponse } from "./DeleteDatabase/res";
import { DeleteGatewayRequest } from "./DeleteGateway/req";
import { DeleteGatewayResponse } from "./DeleteGateway/res";
import { DeleteGatewayInstanceRequest } from "./DeleteGatewayInstance/req";
import { DeleteGatewayInstanceResponse } from "./DeleteGatewayInstance/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DownloadGatewayProgramRequest } from "./DownloadGatewayProgram/req";
import { DownloadGatewayProgramResponse } from "./DownloadGatewayProgram/res";
import { FindUserGatewayByIdRequest } from "./FindUserGatewayById/req";
import { FindUserGatewayByIdResponse } from "./FindUserGatewayById/res";
import { GetUserDatabasesRequest } from "./GetUserDatabases/req";
import { GetUserDatabasesResponse } from "./GetUserDatabases/res";
import { GetUserGatewayInstancesRequest } from "./GetUserGatewayInstances/req";
import { GetUserGatewayInstancesResponse } from "./GetUserGatewayInstances/res";
import { GetUserGatewaysRequest } from "./GetUserGateways/req";
import { GetUserGatewaysResponse } from "./GetUserGateways/res";
import { ListDatabaseAccessPointRequest } from "./ListDatabaseAccessPoint/req";
import { ListDatabaseAccessPointResponse } from "./ListDatabaseAccessPoint/res";
import { ModifyDatabaseRequest } from "./ModifyDatabase/req";
import { ModifyDatabaseResponse } from "./ModifyDatabase/res";
import { ModifyGatewayRequest } from "./ModifyGateway/req";
import { ModifyGatewayResponse } from "./ModifyGateway/res";
import { RetryDatabaseRequest } from "./RetryDatabase/req";
import { RetryDatabaseResponse } from "./RetryDatabase/res";
import { StopGatewayRequest } from "./StopGateway/req";
import { StopGatewayResponse } from "./StopGateway/res";

interface DMS_DG {
    /**
     * 调用此API可以将他云或本地的数据库接入至阿里云。
     */
    AddDatabase(query: AddDatabaseRequest): Promise<AddDatabaseResponse>;
    /**
     * 调用此API可以在网关中批量添加数据库。
     */
    AddDatabaseList(query: AddDatabaseListRequest): Promise<AddDatabaseListResponse>;
    /**
     * 调用此API可以检查当前用户是否开通数据库网关产品。
     */
    CheckDGEnabled(query: CheckDGEnabledRequest): Promise<CheckDGEnabledResponse>;
    /**
     * 调用此API对数据库连通性进行测试。
     */
    ConnectDatabase(query: ConnectDatabaseRequest): Promise<ConnectDatabaseResponse>;
    /**
     * 调用此API创建一个全新的数据库网关。
     */
    CreateGateway(query: CreateGatewayRequest): Promise<CreateGatewayResponse>;
    /**
     * 调用此API可以生成线下安装网关时需要的验证码。该验证码将与云上创建的网关相对应。
     */
    CreateGatewayVerifyCode(query: CreateGatewayVerifyCodeRequest): Promise<CreateGatewayVerifyCodeResponse>;
    /**
     * 调用此API可删除数据库网关中添加的数据库。
     */
    DeleteDatabase(query: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse>;
    /**
     * 调用此API可以删除指定网关。
     */
    DeleteGateway(query: DeleteGatewayRequest): Promise<DeleteGatewayResponse>;
    /**
     * 调用此API可以删除指定的数据库网关节点。
     */
    DeleteGatewayInstance(query: DeleteGatewayInstanceRequest): Promise<DeleteGatewayInstanceResponse>;
    /**
     * 调用此API可以获取支持创建数据库网关的地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用此API可以获取网关程序的下载地址。阿里云用户均可下载，无需权限认证。
     */
    DownloadGatewayProgram(query: DownloadGatewayProgramRequest): Promise<DownloadGatewayProgramResponse>;
    /**
     * 调用此API可以获取网关的详细信息，包括网关的创建人、运行中的网关节点数量等信息。
     */
    FindUserGatewayById(query: FindUserGatewayByIdRequest): Promise<FindUserGatewayByIdResponse>;
    /**
     * 调用此API可以查看指定网关中已添加的数据库列表信息。
     */
    GetUserDatabases(query: GetUserDatabasesRequest): Promise<GetUserDatabasesResponse>;
    /**
     * 调用此API可以获取网关节点的详细信息。
     */
    GetUserGatewayInstances(query: GetUserGatewayInstancesRequest): Promise<GetUserGatewayInstancesResponse>;
    /**
     * 调用此API可以获取用户创建的DG网关列表。
     */
    GetUserGateways(query: GetUserGatewaysRequest): Promise<GetUserGatewaysResponse>;
    /**
     * 调用此API可以获取数据库访问点列表。
     */
    ListDatabaseAccessPoint(query: ListDatabaseAccessPointRequest): Promise<ListDatabaseAccessPointResponse>;
    /**
     * 调用此API可以修改数据库描述等信息。
     */
    ModifyDatabase(query: ModifyDatabaseRequest): Promise<ModifyDatabaseResponse>;
    /**
     * 调用该API可以修改网关的基本信息，包含网关名称和网关描述。
     */
    ModifyGateway(query: ModifyGatewayRequest): Promise<ModifyGatewayResponse>;
    /**
     * 调用此API可以使数据库网关重新连接数据库。
     */
    RetryDatabase(query: RetryDatabaseRequest): Promise<RetryDatabaseResponse>;
    /**
     * 调用此API可以停止网关服务。
     */
    StopGateway(query: StopGatewayRequest): Promise<StopGatewayResponse>;
}
export default DMS_DG;
