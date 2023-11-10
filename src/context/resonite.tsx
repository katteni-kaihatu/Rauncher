import {createContext, ReactElement, ReactNode, useContext, useMemo} from "react";
import {usePersistent} from "../hooks/usePersistent.ts";


const ResoniteContext = createContext<ResoniteState | null>(null)

interface ResoniteState {
    dataPath: string
    setDataPath: (path: string) => void
    skipIntroTutorial: boolean
    setSkipIntroTutorial: (skip: boolean) => void
    resetDash: boolean
    setResetDash: (reset: boolean) => void
    doNotAutoLoadHome: boolean
    setDoNotAutoLoadHome: (doNotAutoLoadHome: boolean) => void
    loadAssembly: string
    setLoadAssembly: (path: string) => void

    tmpArgs: string
    setTmpArgs: (args: string) => void

    args: string
}

interface ResoniteProviderProps {
    children: ReactNode
}

export const ResoniteProvider = (props: ResoniteProviderProps)=> {
    const [dataPath, setDataPath] = usePersistent("dataPath", "")
    const [skipIntroTutorial, setSkipIntroTutorial] = usePersistent("skipIntroTutorial", false)
    const [resetDash, setResetDash] = usePersistent("resetDash", false)
    const [doNotAutoLoadHome, setDoNotAutoLoadHome] = usePersistent("doNotAutoLoadHome", false)
    const [loadAssembly, setLoadAssembly] = usePersistent("loadAssembly", "")

    const [tmpArgs, setTmpArgs] = usePersistent("tmpArgs", "")

    const args = useMemo(() => {
        let args = ""
        if (dataPath) args += ` -dataPath "${dataPath}"`
        if (skipIntroTutorial) args += " -skipIntroTutorial"
        if (resetDash) args += " -resetDash"
        if (doNotAutoLoadHome) args += " -doNotAutoLoadHome"
        if (loadAssembly) args += ` -loadAssembly "${loadAssembly}"`
        if (tmpArgs) args += ` ${tmpArgs}`
        return args
    }, [skipIntroTutorial, resetDash, doNotAutoLoadHome, loadAssembly, tmpArgs, dataPath])

    const value = useMemo(() => {
        return {
            dataPath,
            setDataPath,
            skipIntroTutorial,
            setSkipIntroTutorial,
            resetDash,
            setResetDash,
            doNotAutoLoadHome,
            setDoNotAutoLoadHome,
            loadAssembly,
            setLoadAssembly,
            tmpArgs,
            setTmpArgs,
            args
        }
    },[dataPath, skipIntroTutorial,resetDash,doNotAutoLoadHome,loadAssembly,tmpArgs, args])


    return (
        <ResoniteContext.Provider value={value}>{props.children}</ResoniteContext.Provider>
    )
}

export const useResonite = () => {
    return useContext(ResoniteContext) as ResoniteState
}