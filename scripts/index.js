/// <reference path="F:/References/jquery-3.7.0.min.js" />
/// <reference path="F:/References/linear-algebra.min.js" />

$(() => {
    if ($('[data-util="tab"]').length) {
        let root_children = $('[data-util="tab"]').children();
        let show_target = $('[data-util="tab"]').data("tab-focus");
        let tab_mappings = [];
        $.each(root_children, (i, value) => {
            let trigger = $(value);
            let target = $(`[data-tab-item="${$(value).data("tab-target")}"]`);
            target.addClass("d-none");
            tab_mappings.push({
                trigger: trigger,
                target: target,
            });
        });
        $.each(tab_mappings, (i, value) => {
            value.trigger.on("click", () => {
                $.each(tab_mappings, (i, value) => {
                    value.trigger.removeClass("active");
                    value.target.addClass("d-none");
                });
                value.trigger.addClass("active");
                value.target.removeClass("d-none");
                $("#active-tab").val(value.trigger.data("tab-target"));
            });
            if (value.trigger.data("tab-target") == show_target) {
                value.trigger.click();
            }
        });
    }

    bootstrapGejalaAwal();
});

function bootstrapGejalaAwal() {
    gejalaAwal.map((val) => {
        $("#gejala-awal-container").append(`
            <div class="col">
                <div class="text-center">
                    <label class="form-check-label" for="${val.id}">${val.name}</label>
                </div>
                <div class="text-center">
                    <input class="form-check-input" type="checkbox" value="" id="${val.id}" />
                </div>
            </div>
        `);
    });
}

function handleGejalaAwalClick() {
    var gejalaCheckIDs = gejalaAwal.map((v) => v.id);
    var diagnosed = true;
    gejalaCheckIDs.map((val) => {
        if (!$(`#${val}`)[0].checked) {
            diagnosed = false;
        }
    });

    $("#gejala-awal-button").attr("disabled", true);

    if (!diagnosed) {
        $("#result-container").removeClass("d-none");
        $("#result-container").addClass("bg-success-subtle");
        $("#diagnosis-result-text").html("<strong>Tidak mengidap Hepatitis<strong>");
    } else {
        $("#whole-asesmen-lanjutan-container").removeClass("d-none");
    }
}

function handleAsesmenLanjutanClick(condition, id) {
    var gejalaLanjutanObj = gejalaLanjutan.filter((v) => v.id == id)[0];

    console.log("Gejala now", gejalaLanjutanObj);

    $.each($(`#${id}-button-container`).children(), (_, val) => {
        $(val).attr("disabled", true);
    });

    var nextStep = gejalaLanjutanObj.next[condition];
    var nextStepObj = gejalaLanjutan.filter((v) => v.id == nextStep)[0];

    if (!nextStepObj.next) {
        $("#diagnosis-result-treatment-info").removeClass("d-none");
        $("#result-container").removeClass("d-none");
        $("#result-container").addClass("bg-danger-subtle");
        $("#diagnosis-result-text").html(`Anda mungkin mengidap <strong>${nextStepObj.name}</strong>`);
    } else {
        $("#asesmen-lanjutan-container").append(`
            <div id="${nextStepObj.id}-container" class="d-flex mb-2 flex-row justify-content-center align-items-center">
                <div id="${nextStepObj.id}-name" class="me-3">${nextStepObj.name}</div>
                <div id="${nextStepObj.id}-button-container" class="d-flex flex-row justify-content-center">
                    <button
                        type="button"
                        onclick="handleAsesmenLanjutanClick('true', '${nextStepObj.id}')"
                        class="btn btn-sm btn-secondary me-1"
                    >
                        Ya
                    </button>
                    <button type="button" onclick="handleAsesmenLanjutanClick('false', '${nextStepObj.id}')" class="btn btn-sm btn-secondary">
                        Tidak
                    </button>
                </div>
            </div>
        `);
    }

    console.log("Gejala next", nextStepObj);
}
