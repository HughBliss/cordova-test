import Foundation
import AVFoundation


@objc(AtolProvider)
class AtolProvider: CDVPlugin {
    var driver: FptrWrapper!

    @objc(pluginInitialize) override func pluginInitialize() {
        do {
            self.driver = try FptrWrapper()
            NSLog("Atol Driver Initialized")
        } catch {
            dispose()
        }
    }

    @objc(openConnection) func openConnection () {
        do {try      self.driver.openConnection()
    } catch {
        dispose()
    }  }

}
