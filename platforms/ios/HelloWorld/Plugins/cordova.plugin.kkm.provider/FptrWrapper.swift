import Foundation

class FptrWrapper {

    var instance: IFptr

    init() throws {

        guard  let candidate = IFptr() else {
            throw FptrWrapperError.driverInstanceCouldNotBeCreated
        }
        self.instance = candidate
    }

    func setSettings(ipAddress: String?, port: Int?) throws {
        let settings = """
                       {
                            \(LIBFPTR_SETTING_MODEL): \(LIBFPTR_MODEL_ATOL_AUTO),
                            \(LIBFPTR_SETTING_PORT): \(libfptr_port.LIBFPTR_PORT_TCPIP.rawValue),
                            \(LIBFPTR_SETTING_IPADDRESS): \(ipAddress ?? "192.168.1.110"),
                            \(LIBFPTR_SETTING_IPPORT): \(port ?? 5555)
                       }
                       """

        guard self.instance.setSettings(settings) != 0 else {
            throw FptrWrapperError.failedToApplySettings
        }
    }

    func openConnection() throws {
        guard self.instance.open() != 0 else {
            throw FptrWrapperError.failedToConnectToPrinter
        }
    }

}

enum FptrWrapperError: Error {
    case driverInstanceCouldNotBeCreated
    case failedToApplySettings
    case failedToConnectToPrinter
}
